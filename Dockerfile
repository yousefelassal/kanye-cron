FROM python:3.9

WORKDIR /app

COPY update-quote.py .

RUN pip install requests

CMD ["python", "update-quote.py"]