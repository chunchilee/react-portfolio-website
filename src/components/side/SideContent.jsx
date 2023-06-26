import React from "react";
import { FiDownloadCloud } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { side, socialIcon } from "../../data/data";
import sideImg from "../../images/side.jpg";

const SideContent = () => {
  const renderSocialIcon = socialIcon.map((icons) => (
    <div className={icons.class} key={icons.id}>
      <span>{icons.icon}</span>
    </div>
  ));

  const renderSide = side.map((item) => (
    <div className="sideContent_skill_box" key={item.id}>
      <Progress title={item.text} done={item.num} back={item.class} />
    </div>
  ));

  return (
    <section className="sideContent">
      <div className="sideContent_top">
        <div className="sideContent_top_img">
          <img src={sideImg} alt="side" width="100%" />
          <div className="sideContent_top_img_name">
            <h3>Linda M. Bellamy</h3>
            <span>Sr. Developer</span>
          </div>
        </div>
        <div className="sideContent_top_social">{renderSocialIcon}</div>
      </div>
      <div className="sideContent_bottom">
        <div className="sideContent_bottom_skill">{renderSide}</div>
      </div>
      <div className="sideContent_bottom_buttonGroup">
        <button className="sm_button">
          <span>
            <FiDownloadCloud className="button_icon" />
          </span>
        </button>
        <button className="button">
          <RiMoneyDollarCircleLine className="button_icon" />
          <span>HIRE ME</span>
        </button>
      </div>
    </section>
  );
};

const Progress = ({ done, title, back }) => {
  return (
    <div className="progress">
      <div
        className={`progress_done ${back}`}
        style={{ opacity: 1, width: `${done}%` }}
      ></div>
      <div className="progress_num">
        <h4>{done}.</h4>
      </div>
      <div className="progress_title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
export default SideContent;
