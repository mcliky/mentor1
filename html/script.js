const mediaQuery = window.matchMedia('(max-width: 375px)');
const paraContainer = document.getElementById('paraContainer');

function handleViewportChange(mediaQuery) {
  if (mediaQuery.matches) {
    paraContainer.innerHTML = `
      <p>A confirmation email has been sent to</p>
      <p>
        <span class="pEmail">ash@loremcompany.com.</span>
        <span>Please open it and</span>
      </p>
      <p>click the button inside to confirm your</p>
      <p>subscription.</p>
    `;
  } else {
    paraContainer.innerHTML = `
      <p>A confirmation email has been sent to</p>
      <p>
        <span class="pEmail">ash@loremcompany.com.</span>
        <span>Please open it and click</span>
      </p>
      <p>the button inside to confirm your subscription.</p>
    `;
  }
}

handleViewportChange(mediaQuery); // Check the initial viewport state

mediaQuery.addEventListener('change', handleViewportChange); // Listen for viewport changes
