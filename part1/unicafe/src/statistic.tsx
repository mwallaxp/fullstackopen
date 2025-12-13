type StatisticsType = {
  good: number;
  neutral: number;
  bad: number;
};

const StatisticsLine = ({ good, neutral, bad }: StatisticsType) => {
  const all = good + neutral + bad;
  const average = all / 3;
  const positive = (good / all) * 100;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Statistics</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>

          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>

          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>

          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>

          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>

          <tr>
            <td>positive</td>
            <td>{positive}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsLine;
