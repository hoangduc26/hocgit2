import Layout from 'components/templates/Layout';
import Container from 'components/organisms/container';
import React, { useMemo, useState, useEffect, useRef } from 'react';
import { CONSTANT_ROUTE } from 'utils/constants';
import { Button, Input, InputNumber, Modal, Radio } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from 'store/hooks';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { openConfirm } from 'utils/functions';
import iconQrCode from 'assets/icons/ic_qrcode.svg';
import FuncBlock from 'components/common/FuncBlock';
import BarcodeScannerComponent from 'components/common/BarcodeScanner';

const FormLogin: React.FC = () => {
    const [data2, setData2] = React.useState('11');

    const [openModal, setOpenModal] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);

    const openQRModal = () => {
        setShowQRModal(true);
    };

    return (
        <Layout
            title='手分解前→中間処理前カゴ連携'
            isLoading={false}
            isShowRollback
            // onClickRollback={() => handleClickRollback()}
            fixedHeader
        >
            <form className='mt-header'>
                <div>
                    <div>
                        <BarcodeScannerComponent
                            onUpdate={(err, result) => {
                                if (result) {
                                    setData2(result.getText);
                                    // setShowQRModal(false);
                                } else setData2('123');
                            }}
                        />
                        <p>{data2}</p>
                    </div>

                    <FuncBlock
                        leftChild={
                            <div className='flex items-center justify-between w-full'>
                                <h2 className='font-semibold text-white text-md mb-0 mr-3'>
                                    手分解前カゴID
                                </h2>
                                <div className='flex items-center gap-2'>
                                    <button
                                        onClick={openQRModal}
                                        type='button'
                                        className='flex justify-center items-center p-2 rounded bg-[var(--main-color)] text-white text-sm gap-2 w-20'
                                    >
                                        QR
                                        <img
                                            src={iconQrCode}
                                            className='object-contain'
                                            alt='qrcode'
                                        />
                                    </button>
                                </div>
                            </div>
                        }
                        isShowRightIcon={false}
                        onClickIcon={() => setOpenModal(true)}
                    />

                    <div className='input-login-form mb-1 px-4 py-2'>
                        <input
                            name='bunkaiID1'
                            className='outline-none p-3 font-md w-full border-[1px] rounded  bg-[white]'
                            type='text'
                        />
                    </div>

                    <FuncBlock
                        leftChild={
                            <div className='flex items-center justify-between w-full'>
                                <h2 className='font-semibold text-white text-md mb-0 mr-3'>
                                    中間処理前カゴID
                                </h2>
                                <div className='flex items-center gap-2'>
                                    <button
                                        onClick={openQRModal}
                                        type='button'
                                        className='flex justify-center items-center p-2 rounded bg-[var(--main-color)] text-white text-sm gap-2 w-20'
                                    >
                                        QR
                                        <img
                                            src={iconQrCode}
                                            className='object-contain'
                                            alt='qrcode'
                                        />
                                    </button>
                                </div>
                            </div>
                        }
                        isShowRightIcon={false}
                        onClickIcon={() => setOpenModal(true)}
                    />

                    <div className='input-login-form mb-1 px-4 py-2'>
                        <input
                            name='chuukanID1'
                            className='outline-none p-3 font-md w-full border-[1px] mt-2 rounded  bg-[white]'
                            type='text'
                        />
                        <input
                            name='chuukanID2'
                            className='outline-none p-3 font-md w-full border-[1px] mt-2 rounded  bg-[white]'
                            type='text'
                        />
                        <input
                            name='chuukanID3'
                            className='outline-none p-3 font-md w-full border-[1px] mt-2 rounded  bg-[white]'
                            type='text'
                        />
                        <input
                            name='chuukanID4'
                            className='outline-none p-3 font-md w-full border-[1px] mt-2 rounded  bg-[white]'
                            type='text'
                        />
                        <input
                            name='chuukanID5'
                            className='outline-none p-3 font-md w-full border-[1px] mt-2 rounded  bg-[white]'
                            type='text'
                        />
                    </div>

                    <Modal
                        title='QRスキャン'
                        style={{ width: '100%' }}
                        open={showQRModal}
                        footer={null}
                        onCancel={() => setShowQRModal(false)}
                    >
                        <BarcodeScannerComponent
                            onUpdate={(err, result) => {
                                if (result) {
                                    setData2(result.getText);
                                    // setShowQRModal(false);
                                } else setData2('123');
                            }}
                        />
                        <p>{data2}</p>
                    </Modal>

                    <div className='pb-7 pt-3'>
                        <Container>
                            <Button
                                className='bg-green1A text-white w-full rounded-md h-btn-default flex justify-center text-sm items-center'
                                htmlType='submit'
                            >
                                登録
                                <svg
                                    width='22'
                                    height='23'
                                    viewBox='0 0 22 23'
                                    className='ml-2'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M21 1.5L10 12.5M21 1.5L14 21.5L10 12.5M21 1.5L1 8.5L10 12.5'
                                        stroke='white'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </Button>
                        </Container>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default FormLogin;
