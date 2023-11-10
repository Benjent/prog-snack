import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
    "https://cgbnutgnoahljsktehpu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnYm51dGdub2FobGpza3RlaHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMzA2MTAsImV4cCI6MjAxMzcwNjYxMH0.TH4_vF3A2Qe5Q6tTiYtb-vOwFZXp6n6wLJKHAXtbbR8",
)
