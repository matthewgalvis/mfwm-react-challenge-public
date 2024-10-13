'use client'
import { styled } from '@mui/material/styles';
import {Container, Box, Card, IconButton, Typography} from "@mui/material";

export const StockContainer = styled(Container)(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  width: 600,
  margin: 'auto',
  marginTop: theme.spacing(5),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

export const StyledCardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(2),
}));

export const StockTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

export const StyledPriceSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  backgroundColor: '#f9f9f9',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

export const RollingAverageSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#f0f4ff',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

export const CustomIconButton = styled(IconButton)(() => ({
  fontSize: 30,
}));

