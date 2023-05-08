import { useState } from 'react';
import axios from 'axios';
import { GreenButton, BlueButton } from './Buttons';
import { createDownload } from '../util/imageDownloader';

const MEME_API_URL = 'https://api.imgflip.com/caption_image?template_id=';
const username = 'MelissaMcFadzien';
const password = 'PicklesMeme';

export const MemeGenerator = () => {
  const templates = [
    {
      name: 'PickleIsSerious',
      templateId: '458277150',
      templateUrl: 'https://i.imgflip.com/7kugwu.png',
      memeTextSpaces: 1,
    },
    {
      name: 'OliveYes?',
      templateId: '458356702',
      templateUrl: 'https://i.imgflip.com/7kw6am.png',
      memeTextSpaces: 2,
    },
  ];

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImageUrl, setMemeImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].templateUrl);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTopText('');
    setBottomText('');
    setIsLoading(true);

    const memeTemplateId = selectedTemplate.templateId;

    let apiUrl;
    if (selectedTemplate.memeTextSpaces == 2) {
      apiUrl = `${MEME_API_URL}${memeTemplateId}&text0=${topText}&text1=${bottomText}&username=${username}&password=${password}`;
    } else {
      apiUrl = `${MEME_API_URL}${memeTemplateId}&text1=${bottomText}&username=${username}&password=${password}`;
    }

    try {
      const response = await axios.get(apiUrl);
      console.log(response);
      const data = response.data;
      setMemeImageUrl(data.data.url);
      setIsLoading(false);
      setShowDownloadButton(true);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const memeTemplateId = selectedTemplate.templateId;
    let apiAddress;
    let downloadName;
    if (selectedTemplate.memeTextSpaces == 2) {
      apiAddress = `${MEME_API_URL}${memeTemplateId}&text0=${topText}&text1=${bottomText}&username=${username}&password=${password}`;
      downloadName = `${selectedTemplate.name}${topText}${bottomText}`;
    } else {
      apiAddress = `${MEME_API_URL}${memeTemplateId}&text1=${bottomText}&username=${username}&password=${password}`;
      downloadName = `${selectedTemplate.name}${bottomText}`;
    }
    createDownload(apiAddress, downloadName);
  };

  return (
    <div className='bg-themeblue/50 m-auto flex w-4/5 flex-col p-4 text-center'>
        <div className='flex flex-row items-end p-2'>
        <span className='text-themeGreen font-mono text-5xl p-2'>1.</span>
      <h1 className='p-2'> select your template: </h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div className='flex flex-row items-start p-4 w-4/5 m-auto'>
        {templates.map((template) => (
          <div className='text-center m-auto w-1/2 justify-start' key={template.templateUrl}>
            <label key={template.templateUrl} />
            <input
              type='radio'
              name='template'
              value={template.templateUrl}
              checked={selectedTemplate.templateUrl === template.templateUrl}
              onChange={() => {
                console.log(selectedTemplate);
                setSelectedTemplate(template);
              }}
            />
            <img src={template.templateUrl} alt={template.name} className='max-h-1/2 object-cover p-2'/>
            
          </div>
        ))}
      </div>
      <div className='flex flex-row items-end p-2'>
        <span className='text-themeGreen font-mono text-5xl p-2'>2.</span>
      <h1 className='p-2'> enter your text: </h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div className='flex flex-col w-2/3 mx-auto my-2'>
      {selectedTemplate.memeTextSpaces == 2 && (
        <>
        <label>Top text: </label>
        <input type='text' 
        className='border-2 border-themeYellow m-2'
        value={topText} 
        onChange={(event) => setTopText(event.target.value)} />
         </>
      )}
      <label>Bottom text: </label>
      <input
        type='text'
        className='border-2 border-themeYellow m-2'
        value={bottomText}
        onChange={(event) => setBottomText(event.target.value)}
      />
      <div>
      <GreenButton
        type='submit'
        disabled={isLoading}
        buttonText={'Generate'}
        action={handleSubmit}
      />
      </div>
      </div>

      {isLoading && <p>Loading...</p>}
      {memeImageUrl && 
      <div>
      <div className='flex flex-row items-end p-2'>
         <span className='text-themeGreen font-mono text-5xl p-2'>3.</span>
        <h1 className='p-2'>enjoy your meme: </h1>
        </div>
      <img src={memeImageUrl} alt='Generated Meme' className='w-1/2 m-auto p-6' />
      </div>}
      {showDownloadButton && 
      <div className='text-center'>
      <BlueButton buttonText={'Download your meme'} action={handleDownload} />
      </div>
      }
    </div>
  );
};
