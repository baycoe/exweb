            document.getElementById("entername").onclick = function () {
                let name = document.getElementById("username").value
                document.getElementById("showname").innerText = "สวัสดี " + name + " !"
            }
            
            document.getElementById("enterage").onclick = function () {
                let year = new Date().getFullYear()
                let age = document.getElementById("userage").value
                age = year - age;
                document.getElementById("showage").innerText = "คุณอายุ " + age + " ปี"
            }

            document.getElementById("enterhobbies").onclick = function () {
                let hobbies = document.getElementById("userhobbies").value
                document.getElementById("showhobbies").innerText = "งานอดิเรกของคุณคือ " + hobbies
            }
            
            document.getElementById("profileBT").onclick = function () {
                    let name = document.getElementById("username").value
                    let year = new Date().getFullYear()
                    let age = document.getElementById("userage").value
                    age = year - age;
                    let hobbies = document.getElementById("userhobbies").value
                    if ( name === "" || age == 2025 || hobbies ==="") {
                        alert("โปรดกรอกข้อมูลให้ครบถ้วน");
                    } else {
                        document.getElementById("profile").innerHTML = "ชื่อ: ["+ name +  "]<br>คุณอายุ: [" + age + "ปี]<br>งานอดิเรก: [" + hobbies + "]"; 
                        profile.style.display = "block"
                    }
            }
             document.getElementById("closeprofile").onclick = function () {
                    document.getElementById("profile").innerText = ""
                    profile.style.display = "none"
            }
            
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
            }

            let count = 0
            document.getElementById("countBT").onclick = function () {
                count++;
                document.getElementById("count").innerText = "คุณคลิกไปแล้ว " + count + " ครั้ง"
            }
            document.getElementById("resetBT").onclick = function () {
                count=0;
                document.getElementById("count").innerText = "คุณคลิกไปแล้ว " + count + " ครั้ง"
            }

            document.getElementById("addBtn").onclick = function () {
                let input = document.getElementById("taskInput")
                let taskText = input.value.trim()

                if (taskText !== "") {
                    let li = document.createElement("li")
                    li.textContent = taskText
                    li.onclick = function () {
                        li.classList.toggle("done")
                    }

                    let delBtn = document.createElement("button")
                    delBtn.textContent = "ลบ"
                    delBtn.onclick = function () {
                        li.remove()
                    }

                    li.appendChild(delBtn)
                    document.getElementById("taskList").appendChild(li)
                    input.value = ""
                }
            }
