let count = 0

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
                document.getElementById("profile").innerHTML = "ชื่อ: ["+ name +  "]<br>คุณอายุ: [" + age + "ปี]<br>งานอดิเรก: [" + hobbies + "]";
            }

             document.getElementById("closeprofile").onclick = function () {
                document.getElementById("profile").innerText = ""
            }
            
            document.getElementById("secretBT").onclick = function () {
                let secret = document.getElementById("secret")
                if(secret.innerText === "") {
                    secret.innerText = "นี่คือข้อความลับ"
                } else {
                    secret.innerText = "";
                    alert ("CLEAR!")
                }
            }

            document.getElementById("countBT").onclick = function () {
                count++;
                document.getElementById("count").innerText = "คุณคลิกไปแล้ว " + count + " ครั้ง"
            }
            document.getElementById("resetBT").onclick = function () {
                count=0;
                document.getElementById("count").innerText = "คุณคลิกไปแล้ว " + count + " ครั้ง"
            }
