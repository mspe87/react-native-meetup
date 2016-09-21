

var myKey = SET KEY;

export default fetch(`https://api.meetup.com/self/events?key=${myKey}`)
.then(res => res.json())

.catch((err)=>{
  console.log(err);
});
