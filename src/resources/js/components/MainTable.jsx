import React from 'react';
import { Button, Card } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

// スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: purple['A100'],
    },
}));

function MainTable(props) {
    // 定義したスタイルを利用するための設定
    const classes = useStyles();
    
    // 親コンポーネントからpropsを受け取る
    const {headerList, rows} = props;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {/* ヘッダー */}
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        {headerList.map((item, index) => (
                            <TableCell align="center" key={index}>{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                {/* ボディ */}
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            {/* mapで回す場合keyを必ず指定する。データを一意に識別可能な項目。脳死indexはパフォーマンス悪化の原因になる */}
                            {Object.keys(row).map(function(key, i) {
                                    return (
                                        <TableCell align="center" key={i}>{row[key]}</TableCell>
                                    )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MainTable;