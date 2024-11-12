import React, { useState, useEffect } from 'react';

function ContentEditor() {
  const [aboutMe, setAboutMe] = useState('');
  const [languages, setLanguages] = useState(['']);
  const [technologies, setTechnologies] = useState(['']);
  const [developerTools, setDeveloperTools] = useState(['']);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('http://localhost:3001/content');
      const data = await response.json();
      setAboutMe(data.aboutMe);
      setLanguages(data.languages || []);
      setTechnologies(data.technologies || []);
      setDeveloperTools(data.developerTools || []);
    };
    fetchContent();
  }, []);

  const handleAddLanguage = () => {
    setLanguages([...languages, '']);
  };

  const handleAddTechology = () => {
    setTechnologies([...technologies, '']);
  }

  const handleAddDeveloperTools = () => {
    setDeveloperTools([...developerTools, '']);
  }

  const handleSave = async () => {
    const response = await fetch('http://localhost:3001/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aboutMe, languages, technologies, developerTools })
    });
    if (response.ok) {
      alert('Content saved successfully');
    } else {
      alert('Error in Saving');
    }
  };

  return (
    <div className="content-editor">
      <h3>About Me</h3>
      <textarea
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
        rows="4"
      ></textarea>
      <h3>Languages</h3>
      {languages.map((lang, idx) => (
        <input
          key={idx}
          value={lang}
          onChange={(e) => {
            const newLanguages = [...languages];
            newLanguages[idx] = e.target.value;
            setLanguages(newLanguages);
          }}
        />
      ))}
      <button onClick={handleAddLanguage}>Add More</button>
      {technologies.map((lang, idx) => (
        <input
          key={idx}
          value={lang}
          onChange={(e) => {
            const newTechnologies = [...technologies];
            newTechnologies[idx] = e.target.value;
            setTechnologies(newTechnologies);
          }}
        />
      ))}
      <button onClick={handleAddTechology}>Add More</button>
      {developerTools.map((lang, idx) => (
        <input
          key={idx}
          value={lang}
          onChange={(e) => {
            const newDeveloperTools = [...developerTools];
            newDeveloperTools[idx] = e.target.value;
            setDeveloperTools(newDeveloperTools);
          }}
        />
      ))}
      <button onClick={handleAddDeveloperTools}>Add More</button>
      <button className="save" onClick={handleSave}>Save</button>
    </div>
  );
}

export default ContentEditor;
