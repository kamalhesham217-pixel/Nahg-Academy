import { supabase } from "./supabase.js";

const form = document.getElementById("registerForm");
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

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: window.location.origin + "/login.html",
      data: {
        full_name: document.getElementById("fullName").value.trim(),
        phone: document.getElementById("phone").value.trim(),
      },
    },
  });

  btn.disabled = false;

  if (error) {
    show(error.message, "error");
    return;
  }

  // حالة: الإيميل مسجّل قبل كده (Supabase بيرجّع identities فاضية)
  if (data.user && data.user.identities && data.user.identities.length === 0) {
    show("هذا الإيميل مسجّل بالفعل. جرّب تسجيل الدخول.", "error");
    return;
  }

  // حالة: التأكيد مقفول، دخول مباشر
  if (data.session) {
    window.location.href = "dashboard.html";
    return;
  }

  // حالة: التأكيد شغّال
  show("تم إنشاء الحساب. افتح بريدك (وراجع Spam) واضغط رابط التأكيد، ثم سجّل الدخول.", "ok");
});