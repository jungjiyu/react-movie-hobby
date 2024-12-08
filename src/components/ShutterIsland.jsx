import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid,Col,Image,Button, Row} from 'react-bootstrap';
import '../Styles/about.css'

export default class ShutterIsland extends Component{
    render(){
        return(
            <div>
                
                <div className="content-wrapper">    
                    <Image src="assets/img/movies/shutterisland.jpg" />
                    <h2 className="heading">ShutterIsland</h2>
                    
                </div>
                <Grid>
            <Col xs={12} sm={8} smOffset={2}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wssuV_U2eqw?si=ym0fCn8UnVnmx561&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>Live as a monster, or die as a good man.</h3>

<p>
셔터 아일랜드(Shutter Island, 2010)는 1954년, 미국 연방보안관 테디 다니엘스(레오나르도 디카프리오)와 그의 파트너 척 아울(마크 러팔로)이 정신질환을 앓는 범죄자들을 수용하는 병원, 셔터 아일랜드로 파견되면서 시작한다. 이들의 임무는 세 자녀를 익사시킨 후 병원에서 실종된 여성 환자 레이첼 솔란도를 찾는 것이다. 테디는 수사를 진행하며 병원의 의사들이 무언가를 숨기고 있다고 의심하고, 병원이 위험한 실험을 진행한다는 음모론에 빠진다. 그는 병원의 비밀스러운 C동과 등대에 숨겨진 진실을 밝히기 위해 점점 깊이 파고든다.
</p>
<p>
하지만 테디가 이곳에 온 또 다른 이유는 자신의 아내 돌로레스(미셸 윌리엄스)의 죽음에 책임이 있는 방화범 앤드루 레디스를 찾기 위함이었다. 수사 과정에서 테디는 환각과 악몽에 시달리며 점점 정신적으로 불안정해지고, 아내의 환영이 나타나 그에게 진실을 마주하라고 속삭인다. 결국 밝혀진 충격적인 진실은 테디가 사실 방화범 앤드루 레디스 자신이라는 것이다. 그는 과거 아내 돌로레스가 세 자녀를 익사시킨 뒤 그녀를 죽였고, 이 끔찍한 사건으로 인해 자신의 정체성을 망각하며 연방보안관이라는 환상 속에서 살아가고 있었다. 병원 측은 그의 환상을 깨기 위해 역할극이라는 치료법을 시도했던 것이다.
</p>
<p>
영화의 마지막에서 테디는 진실을 받아들이지만, 스스로 환상 속으로 돌아가기를 선택하며 “괴물로 살아가는 것과 선량한 사람으로 죽는 것 중 무엇이 나을까?”라는 질문을 남긴다. 이 열린 결말은 관객들에게 깊은 여운과 철학적인 질문을 던진다. 셔터 아일랜드는 인간의 정신적 취약성과 기억의 왜곡, 그리고 고통을 외면하는 것과 마주하는 것 중 무엇이 더 나은 선택인가를 탐구하는 심리적 스릴러다. 이 작품은 강렬한 서스펜스와 감정적인 깊이를 통해 관객들에게 계속해서 생각하게 만드는 독보적인 영화다.
</p>
        
                  </Col>
                  </Grid>
            
            <Grid fluid className="team" >
                
                <h1 className="text-center" >출연진</h1>
                <h5 className="text-center">주연 및 조연</h5>
                <Grid>
            <Row className= "show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="/assets/img/actors/leonardoDicaprio.jpg" circle className="profile-pic"/>
                    <h3>Leonardo DiCaprio</h3>
                    <h4>테디 다니엘스 역</h4>
                    <p>Leonardo Wilhelm DiCaprio is an American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards.</p>
                    </Col>


                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="/assets/img/actors/markruffalo.jpg" circle className="profile-pic"/>
                    <h3>Mark Ruffalo</h3>
                    <h5>척 아울 역</h5>
                    <p>Mark Alan Ruffalo is an American actor. He began acting in the early 1990s and first gained recognition for his work in Kenneth Lonergan's play This Is Our Youth and drama film You Can Count on Me.</p>
                    </Col>


                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="/assets/img/actors/MichelleWilliams.jpg" circle className="profile-pic"/>
                    <h3>Elliot Page</h3>
                    <h4>돌로리스 샤낼 역</h4>
                    <p>Michelle Ingrid Williams is an American actress. Known primarily for starring in small-scale independent films with dark or tragic themes, she has received various accolades, including two Golden Globe Awards and a Primetime Emmy Award, in addition to nominations for five Academy Awards and a Tony Award. </p>
                    </Col>
                </Row>
                   </Grid>
               
                </Grid>


            </div>
        )
    }
}