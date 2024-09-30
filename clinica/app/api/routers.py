from django.urls import path, include  # Asegúrate de importar 'path' y 'include'
from rest_framework.routers import DefaultRouter
from app.User.views import UserViewSet, RegisterUserView, LoginView, ChangePasswordView
from app.Patient.views import PatientViewSet
from app.Appointment.views import AppointmentViewSet
from app.Billing.views import BillingViewSet
from app.MedicationInventory.views import MedicationInventoryViewSet
from app.MedicalRecord.views import MedicalRecordViewSet

router = DefaultRouter()

# Registrar ViewSets
router.register(r'User', UserViewSet, basename='user')
router.register(r'Patient', PatientViewSet, basename='patient')
router.register(r'Appointment', AppointmentViewSet, basename='appointment')
router.register(r'Billing', BillingViewSet, basename='billing')
router.register(r'MedicationInventory', MedicationInventoryViewSet, basename='medication_inventory')
router.register(r'MedicalRecord', MedicalRecordViewSet, basename='medical_record')

# Crear la lista de urlpatterns
urlpatterns = [
    path('UserRegister/', RegisterUserView.as_view(), name='register'),
    path('Login/', LoginView.as_view(), name='login'),
    path('ChangePassword/', ChangePasswordView.as_view(), name='change_password'),
]

# Agregar las URLs del router a urlpatterns
urlpatterns += router.urls
