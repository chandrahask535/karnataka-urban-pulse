// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://myrteuqoeettnpunxoyt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15cnRldXFvZWV0dG5wdW54b3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MTI2MTgsImV4cCI6MjA1OTM4ODYxOH0.obIJIul1h5lmtpUui3UQOAiuPB0x-DKq3SRO-_W7kM0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);