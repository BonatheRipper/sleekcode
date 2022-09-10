import React from "react";
import { useState, useEffect } from "react";
import {
  programmingLanguages,
  programmingThemes,
  highlighterLanguages,
  programmingFontSize,
} from "../seed/demoData";
import AceEditor from "react-ace";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  xonokai,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";

import SideBar from "../components/SideBar";
import Sidebarnav1 from "../components/Sidebarnav1";

import { SiJava, SiVisualstudiocode } from "react-icons/si";
import { TbCodeMinus } from "react-icons/tb";
import { RiTimerLine } from "react-icons/ri";
import {
  MdAccessTimeFilled,
  MdOutlineArrowForwardIos,
  MdWorkspacesOutline,
} from "react-icons/md";
import { FcIdea } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";

import { useGlobalContext } from "../utils/GlobalContext";
import TopLogo from "../components/TopLogo";
import BottomQuestionNav from "../components/BottomQuestionNav";
const ProblemsPage = () => {
  const { day, setNavcss, attheBottom } = useGlobalContext();
  const [navBack, setNavBack] = useState(false);
  const [highlightedLang, setHighlightedLang] = useState({
    name: "java",
    code: `
    public Board() {
        
        initBoard();
    }
    
    private void initBoard() {

        addKeyListener(new TAdapter());
        setBackground(Color.black);
        setFocusable(true);

        setPreferredSize(new Dimension(B_WIDTH, B_HEIGHT));
        loadImages();
        initGame();
    }

    private void loadImages() {

        ImageIcon iid = new ImageIcon("src/resources/dot.png");
        ball = iid.getImage();

        ImageIcon iia = new ImageIcon("src/resources/apple.png");
        apple = iia.getImage();

        ImageIcon iih = new ImageIcon("src/resources/head.png");
        head = iih.getImage();
    }`,
  });
  const [navActive, setNavActive] = useState(false);
  const [aceSettings, setAceSetthings] = useState({
    mode: "javascript",
    theme: "monokai",
    font: "14",
  });
  const [options, setOptions] = useState({
    Description: true,
    Solution: false,
    Submissions: false,
  });
  const { Description, Submissions, Solution } = options;
  useEffect(() => {
    if (day) {
      setNavcss("bg-white");
    }
    if (!day) {
      setNavcss("bg-gray-900");
    }
  }, [day, navBack]);

  const handleLanguage = (e) => {
    if (e.target.value) {
      setAceSetthings((prev) => ({ ...prev, mode: e.target.value }));
    }
  };

  const handleTheme = (e) => {
    if (e.target.value) {
      setAceSetthings((prev) => ({ ...prev, theme: e.target.value }));
    }
  };
  const handleFontSize = (e) => {
    if (e.target.value) {
      setAceSetthings((prev) => ({ ...prev, font: Number(e.target.value) }));
    }
  };
  const questionsSolutions = [{ java: "" }];
  function onChange(newValue) {}

  const optionsSecondaryStyle = (isTrue) => {
    return `${
      isTrue
        ? `${
            day
              ? "border-t border-x  border-gray-400  "
              : "bg-gray-900 text-gray-300"
          } `
        : ""
    } flex rounded-t-sm flex-col justify-center items-center py-2  w-4/12 mx-1 text-sm`;
  };
  const handleOptionscclick = (optionsKey) => {
    // setOptions((prev) => ({ ...prev, [keyX]: true }));
    let newoptions = {};
    for (const key in options) {
      if (key === optionsKey) {
        newoptions[key] = true;
      } else {
        newoptions[key] = false;
      }
    }
    setOptions(newoptions);
  };
  console.log(highlightedLang);
  return (
    <div
      className={` main relative w-full ${
        !day ? "mainNight text-white  " : ""
      } relative  h-screen  `}
    >
      <SideBar day={day} navActive={navActive} setNavActive={setNavActive} />
      <Sidebarnav1 day={day} css={` w-2/12  hidden md:block py-20 `} />
      <div className={`w-full md:flex justify-end ${!day ? "mainNight" : ""}`}>
        <div className={`relative md:w-10/12  flex justify-center flex-col`}>
          <div
            id="overviewContent "
            className="w-full  flex flex-col  py-12 my-8 justify-start items-start"
          >
            {" "}
            <div className="question flex flex-row text-2xl md:text-3xl ">
              <span className="">1. </span>
              <span className="  mx-2">Two Sum </span>
            </div>
            <div
              className={`container border ${
                !day ? "border-gray-600 " : "border-gray-300 "
              } flex items-stretch flex-col md:flex-row justify-center  my-6 w-full`}
            >
              <div
                className={`shadow border w-full md:w-6/12   my-2 ${
                  !day ? "border-gray-600 " : "border-gray-300 "
                }`}
              >
                <div
                  className={`options ${
                    day ? " border-gray-300 " : "border-gray-600"
                  } flex flex-row justify-between rounded-t-full items-end border-b`}
                >
                  <div
                    onClick={(e) => handleOptionscclick("Description")}
                    id="description"
                    className={`select ${optionsSecondaryStyle(Description)} `}
                  >
                    <span className="px-2  text-xl text-purple-800 ">
                      <TbCodeMinus />
                    </span>
                    <span className="">Description</span>
                  </div>
                  <div
                    id="solution"
                    onClick={(e) => handleOptionscclick("Solution")}
                    className={`select  ${optionsSecondaryStyle(Solution)}  `}
                  >
                    <span className="px-2  text-lg  ">
                      <FcIdea />
                    </span>
                    <span>Solution</span>
                  </div>
                  <div
                    id="submissions"
                    onClick={(e) => handleOptionscclick("Submissions")}
                    className={`select ${optionsSecondaryStyle(Submissions)} `}
                  >
                    <span className="px-2  text-lg text-blue-800 ">
                      <SiVisualstudiocode />
                    </span>
                    <span>Submissions</span>
                  </div>
                </div>
                {Description && (
                  <div className="questionDescriptionBox px-4 my-4 text-sm flex flex-col 	">
                    <div
                      className={`${
                        !day ? "text-green-800" : "text-green-600"
                      } text-gray-100  rounded md:px-8 px-6 my-1 md:py-2  py-1 font-extrabold difficulty`}
                    >
                      <h5 className="mx-2"> Easy</h5>
                    </div>
                    <div
                      className={`${
                        !day ? "text-gray-300" : "text-white"
                      }  flex flex-row rounded md:px-8  my-2 md:py-2  py-1 text-xs difficulty`}
                    >
                      <span className="px-8 border bg-cyan-800 mx-0 rounded-xl ">
                        {" "}
                        Array
                      </span>
                      <span className="px-8 border bg-gray-800 mx-0  rounded-xl ">
                        {" "}
                        Hash Table
                      </span>
                    </div>
                    <div
                      className={`${
                        !day ? "text-gray-300" : ""
                      }  flex flex-col  rounded md:px-8  my-2 md:py-2  py-1 text-xs difficulty`}
                    >
                      <div className="flex flex-row px-2 items-center">
                        {" "}
                        <span className=" text-xl text-red-400">
                          {" "}
                          <RiTimerLine />
                        </span>
                        <span className=" text-base px-2 font-bold">
                          {" "}
                          Time{" "}
                        </span>
                        <span className="  px-1 text-xl font-thin tangerine">
                          {" "}
                          O(n){" "}
                        </span>
                      </div>
                      <div className="flex flex-row px-2 items-center">
                        {" "}
                        <span className=" text-xl text-yellow-700">
                          {" "}
                          <MdWorkspacesOutline />
                        </span>
                        <span className=" text-base px-2 font-bold">
                          {" "}
                          Space{" "}
                        </span>
                        <span className="  px-1 text-xl font-thin tangerine">
                          {" "}
                          O(n){" "}
                        </span>
                      </div>
                    </div>{" "}
                    <p className="leading-loose  font-thin">
                      You are given two strings s and p where p is a subsequence
                      of s. You are also given a distinct 0-indexed integer
                      array removable containing a subset of indices of s (s is
                      also 0-indexed). You want to choose an integer k such
                      that, after removing k characters from s using the first k
                      indices in removable, p is still a subsequence of s. More
                      formally, you will mark the character at then remove all
                      marked characters and check if p is still a subsequence.
                      Return the maximum k you can choose such that p is still a
                      subsequence of s after the removals. A subsequence of a
                      string is a new string generated from the original string
                      with some characters (can be none) deleted without
                      changing the relative order of the remaining characters.
                    </p>
                  </div>
                )}
                {Solution && (
                  <div className="questionDescriptionBox   flex flex-col text-sm   w-full	">
                    {" "}
                    <select
                      onChange={(e) => console.log(e.target.key)}
                      className={`w-full py-2  px-2 ${
                        !day ? "bg-transparent  border-gray-600" : ""
                      }  md:text-base text-xs border `}
                    >
                      {highlighterLanguages.map((item) => (
                        <option
                          data-code={item.code}
                          key={item.name}
                          value={item.value}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <div
                      className={`border w-full ${
                        !day ? "border-gray-700" : "border-gray-200 shadow"
                      }`}
                    >
                      {" "}
                      <SyntaxHighlighter
                        language={highlightedLang.name}
                        style={day ? oneLight : xonokai}
                      >
                        {`${highlightedLang.code}`}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                )}
                {Submissions && (
                  <div className="questionDescriptionBox px-4 my-4 text-sm  h-40 w-full bg-red-800	"></div>
                )}
              </div>
              <div
                className={` border ${
                  !day ? "border-gray-600 " : "border-gray-300 "
                }  shadow w-full md:w-6/12 flex flex-col justify-between items-center  my-2`}
              >
                <div className="aceOptions flex  flex-row w-full ">
                  <div
                    className={` border h-12 w-4/12 ${
                      !day ? "border-gray-600 " : "border-gray-300  "
                    } `}
                  >
                    <select
                      onChange={(e) => handleLanguage(e)}
                      className={`w-full h-full px-2 ${
                        !day ? "bg-transparent  border-gray-600" : ""
                      }  md:text-base text-xs`}
                    >
                      {programmingLanguages.map((item) => (
                        <option key={item.name} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    className={` border h-12 w-4/12 ${
                      !day ? "border-gray-600 " : "border-gray-300  "
                    }`}
                  >
                    {" "}
                    <select
                      onChange={(e) => handleTheme(e)}
                      className={`w-full h-full px-2 ${
                        !day ? "bg-transparent  border-gray-600" : ""
                      }  md:text-base text-xs`}
                    >
                      {programmingThemes.map((item) => (
                        <option key={item.name} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    className={` border h-12 w-4/12 ${
                      !day ? "border-gray-600 " : "border-gray-300  "
                    }`}
                  >
                    {" "}
                    <select
                      onChange={(e) => handleFontSize(e)}
                      className={`w-full h-full px-2 ${
                        !day ? "bg-transparent  border-gray-600" : ""
                      } md:text-base text-xs`}
                    >
                      {programmingFontSize.map((item) => (
                        <option key={item.name} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div id="aceEditor" className="aceEditor py-4 bg-black w-full">
                  <AceEditor
                    mode={aceSettings.mode}
                    theme={aceSettings.theme}
                    fontSize={aceSettings.font}
                    placeholder=".............Type Code here.............."
                    width="100%"
                    value={``}
                    onChange={onChange}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    name="aceEditor"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableSnippets: true,
                      showLineNumbers: true,
                    }}
                  />
                </div>
                <div className="aceBtns flex flex-row justify-between items-center w-full px-6 py-2">
                  <button
                    className={`flex flex-row py-2 px-8 w-6/12 mx-1 border rounded-xl border-gray-700 justify-between items-center`}
                  >
                    <span>Submit</span>
                    <span className="">
                      <BsCheckCircle />
                    </span>
                  </button>
                  <button
                    className={`flex flex-row py-2 px-8 w-6/12 border mx-1 rounded-xl bg-cyan-500 text-white justify-between items-center`}
                  >
                    <span>Run</span>
                    <span className="">
                      <MdOutlineArrowForwardIos />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomQuestionNav />
    </div>
  );
};

export default ProblemsPage;
