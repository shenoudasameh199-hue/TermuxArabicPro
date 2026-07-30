document.addEventListener("DOMContentLoaded", async () => {

    const app = document.getElementById("app");

    try {

        const response = await fetch("data/commands.json");
        const commands = await response.json();

        commands.forEach(item => {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>

                <pre>${item.command}</pre>

                <button onclick="copyCommand('${item.command}')">
                    📋 نسخ
                </button>
            `;

            app.appendChild(card);

        });

    } catch (err) {

        app.innerHTML = "<h2>حدث خطأ أثناء تحميل البيانات</h2>";

        console.log(err);

    }

});

function copyCommand(text){

    navigator.clipboard.writeText(text);

    alert("تم نسخ الأمر ✅");

}
