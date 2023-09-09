document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        return daysOfWeek[dayIndex];
    }

    // Function to update the element content
    function updateElementContent(elementId, content) {
        const element = document.querySelector(`[data-testid="${elementId}"]`);
        if (element) {
            element.textContent = content;
        }
    }

    // Update the current day of the week
    function updateCurrentDayOfWeek() {
        const currentDayOfWeek = getCurrentDayOfWeek();
        updateElementContent("currentDayOfTheWeek", currentDayOfWeek);
    }

    // Initial update
    updateCurrentDayOfWeek();

    // Update the current day of the week once per day
    setInterval(updateCurrentDayOfWeek, 24 * 60 * 60 * 1000);
});
