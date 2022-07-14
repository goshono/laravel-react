import React from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { purple } from '@material-ui/core/colors';

// スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: purple['A100'],
    },
}));

// ヘッダーコンテンツ用の配列
const headerList = ['名前', 'タスク内容', '編集', '完了'];



function Home() {
    // 定義したスタイルを利用するための設定
    const classes = useStyles();
    let rows = [
        {
            name: 'なかやまきんに君',
            content: 'スクワット',
            // ボタンも再利用性を考慮して切り出す
            editBtn: <Button color="secondary" variant="contained">編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>,
        },
        {
            name: 'シャイニー薊',
            content: '肩トレ',
            editBtn: <Button color="secondary" variant="contained">編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>,
        }
    ];

    return (
        <div className='container'>
            <div cla    ssName="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <Card className={classes.card}>
                            {/* ここからテーブル定義 */}
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    {/* ヘッダー */}
                                    <TableHead className={classes.tableHead}>
                                        {headerList.map((item, index) => (
                                            <TableCell align="center" key={index}>{item}</TableCell>
                                            ))
                                        }
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

                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
// 他モジュールで読み込めるようにする
export default Home;