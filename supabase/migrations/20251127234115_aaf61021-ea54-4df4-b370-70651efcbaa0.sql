-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create consultants table
CREATE TABLE public.consultants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  bio TEXT,
  hourly_rate DECIMAL(10,2) NOT NULL,
  rating DECIMAL(3,2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  location TEXT,
  verified BOOLEAN DEFAULT false,
  specializations TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(user_id)
);

-- Enable RLS on consultants
ALTER TABLE public.consultants ENABLE ROW LEVEL SECURITY;

-- Consultants policies
CREATE POLICY "Anyone can view consultants"
  ON public.consultants FOR SELECT
  USING (true);

CREATE POLICY "Consultants can update own profile"
  ON public.consultants FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Consultants can insert own profile"
  ON public.consultants FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_consultants_updated_at
  BEFORE UPDATE ON public.consultants
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

-- Insert sample consultants (linking to profiles that will be created on signup)
INSERT INTO public.consultants (id, user_id, title, bio, hourly_rate, rating, total_reviews, location, verified, specializations)
VALUES 
  (gen_random_uuid(), NULL, 'Experto en ML & Deep Learning', 'Especialista en modelos de aprendizaje profundo con 8 años de experiencia', 150, 4.9, 127, 'México', true, ARRAY['Machine Learning', 'TensorFlow', 'Python']),
  (gen_random_uuid(), NULL, 'Especialista en NLP & ChatGPT', 'Desarrollo de soluciones conversacionales con IA generativa', 200, 5.0, 89, 'España', true, ARRAY['GPT', 'NLP', 'Chatbots']),
  (gen_random_uuid(), NULL, 'Consultor de Automatización IA', 'Automatización de procesos empresariales con inteligencia artificial', 120, 4.8, 156, 'Argentina', true, ARRAY['Automatización', 'RPA', 'APIs']);