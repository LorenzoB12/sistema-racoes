package br.com.busolli.lorenzo.demoSistemaRacoes.datatables;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.LinkedHashMap;
import java.util.Map;

@Component
public class Datatables {
	
	private HttpServletRequest request;
	private String[] colunas;	

	public Datatables() {
		super();
	}
	
	public Map<String, Object> getResponse(Page<?> page) {		
		Map<String, Object> json = new LinkedHashMap<>();
		json.put("draw", draw());
		json.put("recordsTotal", page.getTotalElements());
		json.put("recordsFiltered", page.getTotalElements());
		json.put("data", page.getContent());
		return json;
	}	

	public HttpServletRequest getRequest() {
		return request;
	}

	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}

	public String[] getColunas() {
		return colunas;
	}

	public void setColunas(String[] colunas) {
		this.colunas = colunas;
	}

	private int draw() {
		return Integer.parseInt(this.request.getParameter("draw"));
	}
	
	private int start() {
		return Integer.parseInt(this.request.getParameter("start"));
	}
	
	public int getLength() {
		return Integer.parseInt(this.request.getParameter("length"));
	}

	public int getCurrentPage() {
		return start() / getLength();
	}

	public String getColumnName() {
		int iCol = Integer.parseInt(this.request.getParameter("order[0][column]"));
		return this.colunas[iCol];
	}	

	public Sort.Direction getDirection() {
		String order = this.request.getParameter("order[0][dir]");
		Sort.Direction sort = Sort.Direction.ASC;
		if (order.equalsIgnoreCase("desc")) {
			sort = Sort.Direction.DESC;
		}
		return sort;
	}

	public String getSearch() {		
		return this.request.getParameter("search[value]");
	}
	
	public Pageable getPageable() {
		return PageRequest.of(getCurrentPage(), getLength(), getDirection(), getColumnName());
	}
}

/* EXEMPLO DE USO

	//service
	@Autowired
	private AgendamentoRepository repo;
	@Autowired
	private Datatables datatables;
	@Transactional(readOnly = true)
	public Map<String, Object> buscarHistoricoPorPacienteEmail(String email, HttpServletRequest request) {
		datatables.setRequest(request);
		datatables.setColunas(DatatablesColunas.AGENDAMENTOS);
		Page<HistoricoPaciente> page = repo.findHistoricoByPacienteEmail(email, datatables.getPageable());
		return datatables.getResponse(page);
	}

	//controller
	public ResponseEntity<?> historicoAgendamentosPorPaciente(HttpServletRequest request, @AuthenticationPrincipal User user){
		return ResponseEntity.ok(service.buscarHistoricoPorPacienteEmail(user.getUsername(), request));
	}

	//repository
	@Query("select a.id as id,"
				+ "a.paciente as paciente,"
				+ "CONCAT(a.dataConsulta, ' ', a.horario.horaMinuto) as dataConsulta,"
				+ "a.medico as medico,"
				+ "a.especialidade as especialidade "
			+ "from Agendamento a "
			+ "where a.paciente.usuario.email like :email")
	Page<HistoricoPaciente> findHistoricoByPacienteEmail(String email, Pageable pageable);
 */