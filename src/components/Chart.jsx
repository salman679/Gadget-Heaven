import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export default function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 80, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="product_title"
          label={{ value: "Name", position: "insideBottomRight", offset: 0 }}
          scale="band"
          className="text-sm"
        />
        <YAxis
          dataKey={"price"}
          label={{ value: "Price", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="price" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

Chart.propTypes = {
  data: PropTypes.array,
};
