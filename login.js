import { supabase } from "./supabase.js";

const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");
const btn = document.getElementById("submitBtn");

function show(text, type) {
  msg.textContent = text;
  msg.className = "msg " + type;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.className = "msg";
  btn.disabled = true;

  const { error } = await supabase.auth.signInWithPassword({
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
  });

  btn.disabled = false;

  if (error) {
    if (error.message.toLowerCase().includes("email not confirmed")) {
      show("لازم تأكد بريدك أولاً. افتح الرسالة اللي وصلتك واضغط الرابط.", "error");
    } else {
      show("الإيميل أو كلمة المرور غير صحيحة.", "error");
    }
    return;
  }

  window.location.href = "dashboard.html";
});