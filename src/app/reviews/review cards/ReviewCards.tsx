import { Container,Box, SwiperSlide, H4, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from '../Reviews.style'
import Image from 'next/image';

const imageStyle = {
    borderRadius:'50%'
}

const ReviewCards = () => {
  


    return (
    <>
  <Box>
                <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque totam delectus, harum et modi impedit dolor magnam sapiente asperiores distinctio, veniam, similique non possimus necessitatibus laborum unde labore voluptate quos!</Comment>
                <Name>Alex Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} fill src={"/images (13).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
            </SwiperSlide>

            <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque totam delectus, harum et modi impedit dolor magnam sapiente asperiores distinctio, veniam, similique non possimus necessitatibus laborum unde labore voluptate quos!</Comment>
                <Name>Alex Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} fill src={"/images (13).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque totam delectus, harum et modi impedit dolor magnam sapiente asperiores distinctio, veniam, similique non possimus necessitatibus laborum unde labore voluptate quos!</Comment>
                <Name>Alex Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} fill src={"/images (13).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>

                <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque totam delectus, harum et modi impedit dolor magnam sapiente asperiores distinctio, veniam, similique non possimus necessitatibus laborum unde labore voluptate quos!</Comment>
                <Name>Alex Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} fill src={"/images (13).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>

                <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque totam delectus, harum et modi impedit dolor magnam sapiente asperiores distinctio, veniam, similique non possimus necessitatibus laborum unde labore voluptate quos!</Comment>
                <Name>Alex Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} fill src={"/images (13).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>
        </Box>
        </>
  )
}

export default ReviewCards