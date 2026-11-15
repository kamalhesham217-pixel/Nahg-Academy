import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";

const SUPABASE_URL = "https://qbiahirvrfditxmpfasb.supabase.co";
const SUPABASE_KEY = "sb_publishable_7HoWDiwRzESFSlzBaZUweA_0mcld-9m";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);