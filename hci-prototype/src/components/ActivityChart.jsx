import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default class Example extends PureComponent {

  render() {

    const { data } = this.props;
    const dataKey = data.length > 0 ? Object.keys(data[0]).find(key => key !== 'day') : '';

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={750} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey={dataKey} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
