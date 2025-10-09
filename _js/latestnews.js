// Fetch and render markdown content from _data/latestnews.md 
// This could be combined with roadmap.js in the future
fetch('_data/latestnews.md')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load latestnews.md');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('latestnews-content').innerHTML = marked.parse(data);
  })
  .catch(error => {
    console.error('Error fetching markdown:', error);
    document.getElementById('latestnews-content').innerHTML = '<p>Error loading roadmap content. Please try again later.</p>';
  });