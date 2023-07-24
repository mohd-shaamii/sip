// JavaScript code for the About page of the logistics website
document.addEventListener('DOMContentLoaded', function () {
    // Initial About text
    const initialAboutText = "Welcome to our logistics company! We are committed to delivering excellence in transportation and supply chain solutions, tailored to meet our clients' needs. With a dedicated team of logistics experts and cutting-edge technology, we ensure smooth and efficient operations to keep your business moving forward.";

    // Get the necessary elements from the DOM
    const aboutTextElement = document.getElementById('about-text');
    const toggleStoryButton = document.getElementById('toggle-story');
    const storyElement = document.getElementById('story');

    // Set the initial About text
    aboutTextElement.textContent = initialAboutText;

    // Function to toggle the story visibility
    function toggleStory() {
        if (storyElement.style.display === 'none') {
            storyElement.style.display = 'block';
            toggleStoryButton.textContent = 'Hide Our Story';
        } else {
            storyElement.style.display = 'none';
            toggleStoryButton.textContent = 'Read Our Story';
        }
    }

    // Add an event listener to the button to toggle the story visibility
    toggleStoryButton.addEventListener('click', toggleStory);
});
