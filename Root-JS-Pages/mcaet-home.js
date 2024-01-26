function updateDate() {

    console.log("works");
    const currentDate = new Date()
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}
    const formattedDate = currentDate.toLocaleDateString('en-us', options)

    document.getElementById('dateSpan').textContent = formattedDate
   }

updateDate()