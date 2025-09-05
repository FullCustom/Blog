// Fetch and render markdown content from _data/roadmap.md
fetch('_data/roadmap.md')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load roadmap.md');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('roadmap-content').innerHTML = marked.parse(data);
  })
  .catch(error => {
    console.error('Error fetching markdown:', error);
    document.getElementById('roadmap-content').innerHTML = '<p>Error loading roadmap content. Please try again later.</p>';
  });