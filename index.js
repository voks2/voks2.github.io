// Function to load the JSON file and process the data
function loadItemsData() {
    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            processItemsData(data);
        })
        .catch(error => console.error('Error loading items:', error));
}

// Function to process the items data and populate the tags and items
function processItemsData(items) {
    const tagsSet = new Set();
    const itemListElement = document.querySelector('.item-list');

    items.forEach(item => {
        // Add tags to the tagsSet
        item.tags.forEach(tag => tagsSet.add(tag));

        // Create the main item container div
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.dataset.tags = item.tags.join(','); // Add the data-tags attribute

        // Create the item title div
        const titleElement = document.createElement('div');
        titleElement.classList.add('item-title');
        titleElement.textContent = item.projectname;

        // Create the item description div
        const descElement = document.createElement('div');
        descElement.classList.add('item-desc');
        descElement.textContent = item.projectdescription;

        // Append title and description to the main item div
        itemElement.appendChild(titleElement);
        itemElement.appendChild(descElement);

        // Event listener to handle item click
        itemElement.addEventListener('click', function() {
            window.location.href = item.link; // Ensure the link points to a valid HTML file
        });

        itemListElement.appendChild(itemElement);
    });

    // Populate tags list
    const tagsListElement = document.querySelector('.item-tags-list');
    tagsSet.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;

        // Event listener to filter items by tag
        tagElement.addEventListener('click', function() {
            this.classList.toggle('active');
            filterItemsByTags();
        });

        tagsListElement.appendChild(tagElement);
    });
}

// Function to filter items based on selected tags
function filterItemsByTags() {
    const selectedTags = Array.from(document.querySelectorAll('.tag.active')).map(tag => tag.textContent);
    const items = document.querySelectorAll('.item-list .item');

    items.forEach(item => {
        const itemTags = item.dataset.tags.split(','); // Get the tags from the data-tags attribute

        // Check if the item should be displayed based on selected tags
        if (selectedTags.every(tag => itemTags.includes(tag)) || selectedTags.length === 0) {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none';  // Hide the item
        }
    });
}

// Event listener for deselecting tags when clicking outside the tag list
document.addEventListener('click', function(event) {
    const isClickInsideTagsList = event.target.closest('.item-tags-list');
    if (!isClickInsideTagsList) {
        document.querySelectorAll('.tag.active').forEach(tag => tag.classList.remove('active'));
        filterItemsByTags(); // Show all items when no tags are selected
    }
});

// Call the function to load and process items data
loadItemsData();
