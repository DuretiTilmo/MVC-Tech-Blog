const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
    console.log("id-------");
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    };
  };

  document.querySelector('.btn-danger').addEventListener('click', delButtonHandler);

  const updateHandler = async (event) => {
    
    // event.preventDefault();
    if (event.target.hasAttribute('id')) {
       const id = event.target.getAttribute('id');    
       console.log("ID -"+ id);
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
 
    if (title && content) {
      console.log(title + content);
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  }
  };
  document.querySelector('.update').addEventListener('submit', updateHandler);

