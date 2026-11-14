// غيّر الروابط دي لصفحاتك الحقيقية لما تعملها
const routes = {
  guest:    "guest.html",
  login:    "login.html",
  register: "register.html",
  teacher:  "teacher-request.html",
};

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    const url = routes[action];

    // مؤقتاً: تنبيه لحد ما تعمل الصفحات
    alert("هتفتح صفحة: " + action);

    // لما الصفحات تجهز، شيل الـ alert وفعّل السطر ده:
    // window.location.href = url;
  });
});