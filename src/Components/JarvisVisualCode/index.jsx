import { useState } from "react";
import "./style.css";
import folderIcon from "/public/images/Others/css.svg";
import { selectCompilation } from "../../Redux/compilationSlice";
import { useSelector } from "react-redux";
import CodeView from "../CodeView";

export default function JarvisVisualCode(props) {
  const { center_game_screen } = useSelector(selectCompilation);

  const [selectedFolder, setSelectedFolder] = useState(null);

  const files = [
    { id: 1, name: "Game.css", code: center_game_screen },
    { id: 2, name: "Styles.css", code: "sadasdsdsda" },
    { id: 3, name: "MoreStylis.css", code: "dasdasdas" },
  ];

  const handleFolderSelection = (file) => {
    setSelectedFolder(file);
  };

  return (
    <div className="jvc-container">
      <div className="header">
        <div className="title">JVCode</div>
      </div>
      <div className="file-window">
        <div className="sidebar">
          <h2>Styles</h2>
          <ul>
            {/* Render list of folders */}
            {files.map((file) => (
              <li
                key={file.id}
                className={`${
                  selectedFolder === file.id ? "active" : ""
                } folder-list-item`}
                onClick={() => handleFolderSelection(file)}
              >
                <img
                  src={folderIcon}
                  alt="Folder Icon"
                  className="icon"
                  width={64}
                />
                {file.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          <CodeView selectedFolder={selectedFolder} />
        </div>
      </div>
    </div>
  );
}
