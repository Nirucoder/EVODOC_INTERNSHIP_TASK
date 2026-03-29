from sqlalchemy import Column, Integer, String, Float, DateTime, LargeBinary
from datetime import datetime
from .database import Base

class ClassificationHistory(Base):
    __tablename__ = "classification_history"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String)
    prediction = Column(String)
    confidence = Column(Float)
    latency_ms = Column(Integer)
    ram_mb = Column(Float)
    image_data = Column(LargeBinary)
    created_at = Column(DateTime, default=datetime.utcnow)