import myKey from './MEETUPAPIKEY.js';

export default fetch(`https://api.meetup.com/self/events?key=${myKey}`)
.then(res => res.json())

.catch((err)=>{
  console.log(err);
});
