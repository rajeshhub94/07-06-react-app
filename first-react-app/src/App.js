import logo from './logo.svg';
import './App.css';
import subash_chandra_bose from "./images/subash_chandra_bose.png";
import audio1 from "./audio/track_12.mp3";
import video1 from "./video/NETAJIvid.mp4";
function App() {
  return (
    <div className="App">
     <h3>All the content is hosted from web using URL</h3>
     <h2>Mahatma Gandhi</h2><div className='MKG'>
     <div><img className='image' src="https://andvijaysays.com/wp-content/uploads/2013/01/mahatma-gandhi.jpg?w=750"></img></div>
     <div><p>Mohandas Karamchand Gandhi (ISO: Mōhanadāsa Karamacaṁda Gāṁdhī;[pron 1] 2 October 1869 – 30 January 1948) was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world. The honorific Mahātmā (from Sanskrit 'great-souled, venerable'), first applied to him in South Africa in 1914, is now used throughout the world.[2]

Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple in London and was called to the bar in June 1891, at the age of 22. After two uncertain years in India, where he was unable to start a successful law practice, Gandhi moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years.</p></div></div>
    <div><p id='id1'>Mahatma Gandhi's spiritual message to the world
Recorded October 1931</p><audio src='https://upload.wikimedia.org/wikipedia/commons/9/97/Gandhi_-_His_Spiritual_Message_to_the_World%2C_17_October_1931.mp3'controls></audio></div><br/><br/>
    <div id='MKG_vid'><div id='video1'><video src="https://ga.video.cdn.pbs.org/videos/american-experience/baec8491-a66b-4e42-b96a-e220565185da/66192/hd-mezzanine-16x9/promotional_inspiration.mp4" controls muted autoPlay></video></div><div><p id='vid1_para'>AMERICAN EXPERIENCE<br/>

The Inspiration: A Short Film from Freedom Riders</p></div>
</div>
<hr/>
<h3>All the content is saved in folders in the Public domain </h3>
<h2>Jawaharlal Nehru</h2>
<div className='JN'>
     <div><img className='image' src='./images/jawaharlalNehru.png'></img></div>
     <div><p>Jawaharlal Nehru (born November 14, 1889, Allahabad, India—died May 27, 1964, New Delhi) was the first prime minister of independent India (1947–64), who established parliamentary government and became noted for his neutralist (nonaligned) policies in foreign affairs. He was also one of the principal leaders of India’s independence movement in the 1930s and ’40s.Nehru was born to a family of Kashmiri Brahmans, noted for their administrative aptitude and scholarship, who had migrated to Delhi early in the 18th century. He was a son of Motilal Nehru, a renowned lawyer and leader of the Indian independence movement, who became one of Mohandas (Mahatma) Gandhi’s prominent associates. Jawaharlal was the eldest of four children, two of whom were girls. A sister, Vijaya Lakshmi Pandit, later became the first woman president of the United Nations General Assembly.</p></div></div>
<div id='JN_audio'><audio src='./audio/tryst.mp3'controls></audio></div><br/>
<h4>This video has no sound</h4>
<video src='./video/jawaharlal_nehru.mp4'controls muted autoPlay></video><hr/>
<h3>All the content is saved in folders in the Src domain</h3>
<h2>Netaji Subhas Chandra Bose</h2>
<div className='SCB'>
<div><img className='image' src={subash_chandra_bose}></img></div>
     <div><p>Subhas Chandra Bose (/ʃʊbˈhɑːs ˈtʃʌndrə ˈboʊs/ ⓘ shuub-HAHSS CHUN-drə BOHSS;[12] 23 January 1897 – 18 August 1945) was an Indian nationalist whose defiance of British authority in India made him a hero among many Indians, but his wartime alliances with Nazi Germany and Imperial Japan left a legacy vexed by authoritarianism, anti-Semitism, and military failure. The honorific 'Netaji' (Bengali: "Respected Leader") was first applied to Bose in Germany in early 1942—by the Indian soldiers of the Indische Legion and by the German and Indian officials in the Special Bureau for India in Berlin. It is now used throughout India.[h]

Bose was born into wealth and privilege in a large Bengali family in Orissa during the British Raj. An early recipient of an Anglo-centric education, after college he was sent to England to take the Indian Civil Service examination. He succeeded with distinction in the first exam but demurred at taking the routine final exam, citing nationalism as a higher calling. Returning to India in 1921, Bose joined the nationalist movement led by Mahatma Gandhi and the Indian National Congress.</p></div></div>
<audio src={audio1}controls></audio><br/><br/>
<video src={video1}controls muted autoPlay></video>
</div>

  );
}

export default App;
