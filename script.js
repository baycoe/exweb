document.getElementById("entername").onclick = function () {
  const name = document.getElementById("username").value;
  document.getElementById("showname").innerText = "สวัสดี " + name + " !";
};

document.getElementById("enterage").onclick = function () {
  const year = new Date().getFullYear();
  const birthYear = document.getElementById("userage").value;
  const age = year - birthYear;

  document.getElementById("showage").innerText = "คุณอายุ " + age + " ปี";
};

document.getElementById("enterhobbies").onclick = function () {
  const hobbies = document.getElementById("userhobbies").value;
  document.getElementById("showhobbies").innerText = "งานอดิเรกของคุณคือ " + hobbies;
};

document.getElementById("profileBT").onclick = function () {
  const name = document.getElementById("username").value;
  const year = new Date().getFullYear();
  const birthYear = document.getElementById("userage").value;
  const age = year - birthYear;
  const hobbies = document.getElementById("userhobbies").value;

  if (name === "" || birthYear === "" || hobbies === "") {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน");
  } else {
    const profileHTML = `
      ชื่อ: [${name}]<br>
      คุณอายุ: [${age} ปี]<br>
      งานอดิเรก: [${hobbies}]
    `;
    const profile = document.getElementById("profile");
    profile.innerHTML = profileHTML;
    profile.style.display = "block";
  }
};

document.getElementById("closeprofile").onclick = function () {
  const profile = document.getElementById("profile");
  profile.innerText = "";
  profile.style.display = "none";
};

const secret = document.getElementById("secret");
const secretBtn = document.getElementById("secretBT");

secretBtn.onclick = function () {
  if (secret.style.display === "none" || secret.style.display === "") {
    secret.textContent = "นี่คือข้อความลับ";
    secret.style.display = "block";
  } else {
    secret.style.display = "none";
    secret.textContent = "";
    alert("CLEAR!");
  }
};

let count = 0;

document.getElementById("countBT").onclick = function () {
  count++;
  document.getElementById("count").innerText = "คุณคลิกไปแล้ว " + count + " ครั้ง";
};

document.getElementById("resetBT").onclick = function () {
  count = 0;
  document.getElementById("count").innerText = "คุณคลิกไปแล้ว " + count + " ครั้ง";
};

document.getElementById("addBtn").onclick = function () {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
      li.classList.toggle("done");
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "ลบ";
    delBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
};
