import logo from "data-base64:/assets/icon.png";
import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { iconArray } from "~/content";
import { ActionIcon } from "./ActionIcon";

export interface ChattingPanelProps {
  pageText: string;
  onRender: () => void;
}

export function TSWChattingPanel({ pageText, onRender }: ChattingPanelProps) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (onRender) {
      onRender();
    }
  }, [onRender]);

  const submitClick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="tsw-panel">
      <div className="tsw-panel-header">
        <div className="tsw-panel-header-logo">
          <img src={logo} alt="TSW Icon" className="tsw-icon" />
          <span>Chatting With Page</span>
        </div>
        <div className="tsw-panel-menu">
          <div className="tsw-panel-header-action">
            {iconArray.map((icon) => (
              <button
                type="button"
                className="tsw-header-btn"
                id={`tsw-${icon.name.toLowerCase()}-btn`}
                key={icon.name}
              >
                <ActionIcon name={icon.name} />
              </button>
            ))}
          </div>
          <div className="tsw-panel-header-separator" />
          <button id="tsw-close-right-part" type="button">
            <ActionIcon name="Close" />
          </button>
        </div>
      </div>
      <div className="tsw-panel-content">
        <div id="tsw-output-body">xx</div>
      </div>
      <div className="tsw-panel-footer">
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="tsw-panel-input"
        />
        <Button
          type="submit"
          className="tsw-panel-footer-btn"
          onClick={submitClick}
        >
          Send
        </Button>
      </div>
    </div>
  );
}