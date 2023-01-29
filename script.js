let data = {};
let cnt=0

let usernames = new Map()

function visitURL(platform){
  if(platform == 'lc') window.open(`https://leetcode.com/${usernames.get(platform)}`,'_blank')
  if(platform == 'cc') window.open(`https://www.codechef.com/users/${usernames.get(platform)}`,'_blank')
  if(platform == 'cf') window.open(`https://codeforces.com/profile/${usernames.get(platform)}`,'_blank')
  if(platform == 'gfg') window.open(`https://auth.geeksforgeeks.org/user/${usernames.get(platform)}/profile`,'_blank')
  if(platform == 'hr') window.open(`https://www.hackerrank.com/${usernames.get(platform)}`,'_blank')
  if(platform == 'cs') window.open(`https://www.codingninjas.com/codestudio/profile/${usernames.get(platform)}`,'_blank')
  if(platform == 'he') window.open(`https://www.hackerearth.com/@${usernames.get(platform)}`,'_blank')
}

async function forAllUsers(name, cc, cf, gfg, lc, hr, he, cs){
  const api = `https://codecoffee-eight.vercel.app/${cc}/${cf}/${gfg}/${lc}/${hr}/${he}/${cs}`;
  await fetch(api)
  .then((res) => res.json())
  .then((dataa) => {
    data = dataa
    document.getElementById('info').style.display='block'
    document.getElementById('signup').style.display='none'
  })
  cc !== 'ccunf12fun' ? (document.getElementById("codechef").innerHTML = data.ccquestion, usernames.set('cc', cc)) : document.getElementById("cccard").style.display = 'none'; 
  cf !== 'ccunf12fun' ? (document.getElementById("codeforces").innerHTML = data.cfquestion, usernames.set('cf', cf)) : document.getElementById("cfcard").style.display = 'none'; 
  cs !== 'ccunf12fun' ? (document.getElementById("codestudio").innerHTML = data.csquestion, usernames.set('cs', cs)) : document.getElementById("cscard").style.display = 'none'; 
  lc !== 'ccunf12fun' ? (document.getElementById("leetcode").innerHTML = data.lcquestion, usernames.set('lc', lc)) : document.getElementById("lccard").style.display = 'none'; 
  gfg !== 'ccunf12fun' ? (document.getElementById("gfg").innerHTML = data.gfgquestion, usernames.set('gfg', gfg)) : document.getElementById("gfgcard").style.display = 'none'; 
  hr !== 'ccunf12fun' ? (document.getElementById("hackerrank").innerHTML = data.hrquestion, usernames.set('hr', hr)) : document.getElementById("hrcard").style.display = 'none'; 
  he !== 'ccunf12fun' ? (document.getElementById("hackerearth").innerHTML = data.hequestion, usernames.set('he', he)) : document.getElementById("hecard").style.display = 'none'; 
  
  document.getElementById("leetcode").innerHTML = data.lcquestion 
  document.getElementById("codeforces").innerHTML = data.cfquestion;
  document.getElementById("gfg").innerHTML = data.gfgquestion;
  document.getElementById("hackerrank").innerHTML = data.hrquestion;
  document.getElementById("codestudio").innerHTML = data.csquestion;
  document.getElementById("total").innerHTML = data.ccquestion + data.csquestion + data.hrquestion + data.gfgquestion + data.cfquestion + data.lcquestion + data.hequestion
  document.getElementById("myname").innerHTML = name;
}

async function verify(platform, code, username){
  const api = `https://codecoffee-eight.vercel.app/verify/${platform}/${username};`;
  await fetch(api)
  .then((res) => res.json())
  .then((data) => {
    if (data.status === 'ok'){
      document.getElementById(code).classList.add('is-valid');
      document.getElementById(code).classList.remove('is-invalid');
      cnt++;
    }
    else {
      document.getElementById(code).classList.add('is-invalid');
      document.getElementById(code).classList.remove('is-valid');
      cnt++;
    }
  });
}

const makecall = (callback) => {
  cnt = 0;
  let namee = document.getElementById('name').value;
  let cc = document.getElementById('cc').value;
  let cf = document.getElementById('cf').value;
  let cs = document.getElementById('cs').value;
  let lc = document.getElementById('lc').value;
  let hr = document.getElementById('hr').value;
  let he = document.getElementById('he').value;
  let gfg = document.getElementById('gfg').value;

  if(namee === '') namee = 'Ethos Typos';
  if(cc !== '') verify('codechef', 'cc', cc)
  else cc = 'ccunf12fun', cnt++
  if(cf !== '') verify('codeforces', 'cf', cf)
  else cf = 'ccunf12fun', cnt++
  if(cs !== '') verify('codestudio','cs', cs)
  else cs = 'ccunf12fun', cnt++
  if(lc !== '') verify('leetcode', 'lc', lc)
  else lc = 'ccunf12fun', cnt++
  if(hr !== '') verify('hackerrank', 'hr', hr)
  else hr = 'ccunf12fun', cnt++
  if(he !== '') verify('hackerearth', 'he', he)
  else he = 'ccunf12fun', cnt++
  if(gfg !== '') verify('geeksforgeeks', 'gfg', gfg)
  else gfg = 'ccunf12fun', cnt++

  let pre = setInterval(function(){
    if(cnt === 7){
      forAllUsers(namee, cc, cf, gfg, lc, hr, he, cs);
      clearInterval(pre);
    }
    console.log(cnt)
  }, 500);
}

function helper(){
  makecall();
}

document.getElementById('info').style.display='none'
