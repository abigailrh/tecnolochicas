let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 73,
});
 
typewriter
  .pauseFor(2400)
  .typeString('Ve por lo que te gusta no te rindas consiguelo cueste lo que cueste.')
  .pauseFor(150)
  .deleteChars(15)
  .start();
