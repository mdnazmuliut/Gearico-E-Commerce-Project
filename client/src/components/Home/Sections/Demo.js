import styled from "styled-components";
import "./Demo.css";

const Demo = () => {
  return (
    <div id="navigation" style={{ height: "100vh" }}>
      <table className="table">
        <tbody className="tbody">
          <tr className="tr">
            <td className="td accueil">Accueil </td>
            <td className="td">
              <a className="a" href="pages/page2.html">
                Page 2
              </a>
            </td>
            <td className="td">
              <a className="a" href="pages/page3.html">
                Page 3
              </a>
            </td>
            <td className="td">
              <a className="a" href="pages/page4.html">
                Page 4
              </a>
            </td>
            <td className="td">
              <a className="a" href="pages/page5.html">
                Page 5
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
