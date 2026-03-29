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
COPY model_weights.pth* ./
COPY startup.sh .
COPY .env* .
RUN chmod +x startup.sh

# Start: auto-train if weights missing, then serve
CMD ["bash", "startup.sh"]
