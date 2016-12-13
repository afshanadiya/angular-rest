package abstractFactory;

public class offlinePaymemtFactory extends paymentFactory {
	@Override
	public Payment getPayment(String type) {
		if("cheque".equals(type)){
			return new Cheque();
		}
		else{
		return new draft();
		}
	}
}
