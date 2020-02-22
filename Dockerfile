FROM ubuntu:18.04

RUN apt-get update -y
RUN apt-get autoremove -y
RUN apt-get install python3.7 python3.7-dev python3-pip -y
RUN update-alternatives --install /usr/bin/python python /usr/bin/python3.7 10
RUN python -m pip install --upgrade --force pip

RUN apt-get install curl -y
RUN curl https://install.meteor.com/ | sh

RUN pip install future -i https://pypi.tuna.tsinghua.edu.cn/simple

ADD . /opt/app/tencent-cloud-stream-tutoral/
WORKDIR /opt/app/tencent-cloud-stream-tutoral

RUN cd /opt/app/tencent-cloud-stream-tutoral/tcst-h5 && meteor npm install