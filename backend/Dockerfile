FROM python:3.10-slim

# 1. Install system dependencies for PostgreSQL + OpenCV
RUN apt-get update && apt-get install -y libpq-dev gcc libgl1 libglib2.0-0 && rm -rf /var/lib/apt/lists/*

# 2. Limit Python memory usage
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /code
COPY requirements.txt .
# Install CPU-only torch to keep the image small and lean
RUN pip install --no-cache-dir -r requirements.txt

COPY ./app ./app
COPY model_weights.pth .
COPY .env .

# 3. Run with 4 workers to handle traffic, but limited memory
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1"]
