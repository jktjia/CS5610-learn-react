export default function Button() {
  function handleClick() {
    document.getElementById('myBtn').style.backgroundColor = 'green';
    document.getElementById('myBtn').style.fontSize = '50px';
  }
  return (
    <button id='myBtn' onClick={handleClick}>
      Click me
    </button>
  );
}
