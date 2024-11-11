import React, { useState, useEffect } from 'react';

function ContentEditor() {
  const [aboutMe, setAboutMe] = useState('');
  const [languages, setLanguages] = useState(['']);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/content');
      const data = await response.json();
      setAboutMe(data.aboutMe);
      setLanguages(data.languages || []);
    };
    fetchContent();
  }, []);

  const handleAddLanguage = () => {
    setLanguages([...languages, '']);
  };

  const handleSave = async () => {
    await fetch('/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aboutMe, languages })
    });
    alert('Content saved successfully');
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
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default ContentEditor;
