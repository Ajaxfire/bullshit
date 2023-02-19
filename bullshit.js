// Inspiration: Serving the world for over 20 years: https://www.dack.com/web/bullshit.html
// Slot machine inspiration: https://codepen.io/paulstone/pen/RRrQQB

var actionsList =[ 
    'aggregate',
    'architect',
    'augment',
    'benchmark',
    'brand',
    'construct',
    'cultivate',
    'conceptualize',
    'deploy',
    'design',
    'develop',
    'disintermediate',
    'disrupt',
    'derive',
    'embrace',
    'empower',
    'enable',
    'engage',
    'engineer',
    'enhance',
    'enmesh',
    'envision',
    'evolve',
    'expedite',
    'exploit',
    'extend',
    'facilitate',
    'generate',
    'harness',
    'hyperautomate',
    'implement',
    'incentivize',
    'incubate',
    'influence',
    'innovate',
    'integrate',
    'iterate',
    'lead',
    'leverage',
    'maximize',
    'monetize',
    'morph',
    'nourish',
    'nurture',
    'optimize',
    'orchestrate',
    'productize',
    'recontextualize',
    'redefine',
    'reintermediate',
    'reinvent',
    'repurpose',
    'revolutionize',
    'scale',
    'seize',
    'strategize',
    'streamline',
    'syndicate',
    'synergize',
    'synthesize',
    'target',
    'transform',
    'transition',
    'unleash',
    'utilize',
    'visualize',
    'whiteboard'
]

var adjectivesList =[
    '24 / 365',
    '24 / 7',
    'B2B',
    'B2C',
    'back-end',
    'best-of-breed',
    'bleeding-edge',
    'brick-and-mortar',
    'click-and-mortar',
    'collaborative',
    'compelling',
    'cross-platform',
    'cross-media',
    'customized',
    'cutting-edge',
    'distributed',
    'dynamic',
    'e-business',
    'edtech',
    'efficient',
    'E2E',
    'enterprise',
    'extensible',
    'excellent',
    'fintech',
    'free-form',
    'frictionless',
    'front-end',
    'global',
    'granular',
    'handheld',
    'holistic',
    'hyper-realistic',
    'impactful',
    'innovative',
    'integrated',
    'interactive',
    'intuitive',
    'killer',
    'leading-edge',
    'low-code',
    'magnetic',
    'mission-critical',
    'next-gen',
    'no-code',
    'one-to-one',
    'open-source',
    'out-of-the-box',
    'pragmatic',
    'plug-and-play',
    'proactive',
    'real-time',
    'revolutionary',
    'rich',
    'robust',
    'scalable',
    'seamless',
    'sexy',
    'state-of-the-art',
    'sticky',
    'strategic',
    'synergistic',
    'transparent',
    'turn-key',
    'ubiquitous',
    'user-centric',
    'value-added',
    'vertical',
    'viral',
    'virtual',
    'visionary',
    'web-enabled',
    'wireless',
    'world-class'
]

var nounsList =[
    'applications',
    'architectures',
    'bandwidth',
    'blockchains',
    'channels',
    'communities',
    'content',
    'contracts',
    'convergence',
    'deliverables',
    'devices',
    'domains',
    'ecommerce',
    'e-tailers',
    'experiences',
    'functionalities',
    'hyperautomation',
    'infomediaries',
    'infrastructures',
    'initiatives',
    'interfaces',
    'KPIs',
    'markets',
    'metaverses',
    'methodologies',
    'metrics',
    'microservices',
    'mindshare',
    'models',
    'networks',
    'niches',
    'paradigms',
    'partnerships',
    'payments',
    'platforms',
    'portals',
    'providers',
    'realities',
    'relationships',
    'retail',
    'ROI',
    'sectors',
    'synergies',
    'schemas',
    'social media',
    'solutions',
    'supply-chains',
    'systems',
    'taxonomies',
    'technologies',
    'thought leadership',
    'transformations',
    'users',
    'vertices',
    'web 3.0'
]


function buildSlotItem (text) {
    return $('<div>').addClass('list_item').text(text)
}

function buildSlotContents ($container, wordlist) {
  $items = wordlist.map(buildSlotItem);
  $container.append($items);
}

function popPushNItems ($container, n) {
    $children = $container.find('.list_item');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}

// After the slide animation is complete, we want to pop some items off
// the front of the container and push them onto the end. This is
// so the animation can slide upward infinitely without adding
// infinte div elements inside the container.
function rotateContents ($container, n) {
    setTimeout(()=>{
      popPushNItems($container, n);
      $container.css({top: 0});
    }, 300);    
}

function randomSlotttIndex(max) {
  var randIndex = (Math.floor(Math.random() * (max-2))+1);
 // return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
 return randIndex;
}
  
function animateActions() {
  var wordIndex = randomSlotttIndex(actionsList.length);
  $actionbox.animate({top: -wordIndex*48}, 500, 'swing', function () { //48 because 1 list-item height is 3rem = 3*16px = 48px
    rotateContents($actionbox, wordIndex);
  });
}

function animateAdjectives(){
    var wordIndex = randomSlotttIndex(adjectivesList.length);
    $adjectivebox.animate({top: -wordIndex*48}, 500, 'swing', function () {
      rotateContents($adjectivebox, wordIndex);
    });
}

function animateNouns() {
    var wordIndex = randomSlotttIndex(nounsList.length);
    $nounbox.animate({top: -wordIndex*48}, 500, 'swing', function () {
      rotateContents($nounbox, wordIndex);
    });

}

function mkBull(){
    $('#btnGenBS').text("More BS!");
      animateActions();
      setTimeout(()=>{
        animateAdjectives();
      },300); //delay before the second animation
      setTimeout(()=>{
        animateNouns();
      },600); //delay before the third animation
    return false;
}

$(function () {
  $actionbox = $('#actionbox');
  $adjectivebox = $('#adjectivebox');
  $nounbox = $('#nounbox');
  buildSlotContents($actionbox, actionsList);  
  buildSlotContents($adjectivebox, adjectivesList);  
  buildSlotContents($nounbox, nounsList);  
  
//   setInterval(animateActions, 5000);
//   setInterval(animateAdjectives, 5000);
//   setInterval(animateNouns, 5000);
});

//ChatGPT
function deluxeBS(){
  //work in progress
}