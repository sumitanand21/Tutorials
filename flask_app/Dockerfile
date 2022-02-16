FROM python:3.7.4

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils \
&& apt-get dist-upgrade -y \
&& apt-get install vim -y \
&& apt-get install python3-pip -y \
&& apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY ./src /src
COPY requirements.txt /src
RUN chmod 777 /src
RUN pip install --trusted-host pypi.python.org -r /src/requirements.txt

WORKDIR /src
EXPOSE 5000
CMD ["python3", "./api.py"]